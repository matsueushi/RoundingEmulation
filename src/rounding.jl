using Base.Math: ldexp

# Add
function add_up(a::T, b::T) where T<:FloatTypes
    x, y = Base.add12(a, b) # twosum
    if isinf(x)
        ifelse(x == typemin(T) && isfinite(a) && isfinite(b), -floatmax(T), x)
    else
        y > zero(T) ? nextfloat(x) : x
    end
end

# add_down
# rule for signed zero
# y = 0 -> x = a + b
# 1) x ≂̸ 0 => x
# 2) x = 0, a = -b ≂̸ 0 => -0.0
# 3) x = 0, a = b = 0
#    (a, b) = (0.0, 0.0) => 0.0
#    (a, b) = (-0.0, 0.0) => -0.0
#    (a, b) = (-0.0, -0.0) => -0.0
function add_down(a::T, b::T) where T<:FloatTypes
    x, y = Base.add12(a, b) # twosum
    if isinf(x)
        ifelse(x == typemax(T) && isfinite(a) && isfinite(b), floatmax(T), x)
    elseif y < zero(T)
        prevfloat(x)
    else
        ifelse(x == zero(T) && (signbit(a) || signbit(b)), -zero(T), x)
    end
end

# Sub
sub_up(a::T, b::T) where T<:FloatTypes = add_up(a, -b)
sub_down(a::T, b::T) where T<:FloatTypes = add_down(a, -b)

# const
for T in (Float32, Float64)
    # http://verifiedby.me/adiary/09
    @eval c_1(::Type{$T}) = $(ldexp(one(T), log2u(T) + 2 * precision(T) + 1))
    @eval c_2(::Type{$T}) = $(ldexp(one(T), ceil(Int, -log2u(T)//2)))
    @eval c_3(::Type{$T}) = $(ldexp(one(T), 2 * precision(T) - 1))
    @eval c_4(::Type{$T}) = $(ldexp(one(T), -log2u(T) - 3 * precision(T) + 3))
end

# Mul
# http://verifiedby.me/adiary/pub/kashi/image/201406/nas2014.pdf

function mul_up(a::T, b::T) where T<:FloatTypes
    x, y = Base.mul12(a, b)
    if isinf(x)
        ifelse(x == typemin(T) && isfinite(a) && isfinite(b), -floatmax(T), x)
    elseif abs(x) > c_1(T) # not zero(x): (a, b) = (-2.1634867667116802e-200, 1.6930929484402486e-119) fails
        y > zero(T) ? nextfloat(x) : x
    else
        mult = c_2(T)
        s, s2 = Base.mul12(a * mult, b * mult)
        t = (x * mult) * mult
        t < s || (t == s && s2 > zero(T)) ? nextfloat(x) : x
    end
end

function mul_down(a::T, b::T) where T<:FloatTypes
    x, y = Base.mul12(a, b)
    if isinf(x)
        ifelse(x == typemax(T) && isfinite(a) && isfinite(b), floatmax(T), x)
    elseif abs(x) > c_1(T) # not zero(x): (a, b) = (6.640350825165134e-116, -1.1053488936824272e-202) fails
        y < zero(T) ? prevfloat(x) : x
    else
        mult = c_2(T)
        s, s2 = Base.mul12(a * mult, b * mult)
        t = (x * mult) * mult 
        t > s || (t == s && s2 < zero(T)) ? prevfloat(x) : x
    end
end


# Div
function div_up(a::T, b::T) where T<:FloatTypes
    if iszero(a) || iszero(b) || isinf(a) || isinf(b) || isnan(a) || isnan(b)
        a / b
    else
        if b < zero(T)
            a *= -1
            b *= -1
        end
        if abs(a) < c_1(T)
            if abs(b) < c_4(T)
                a *= c_3(T)
                b *= c_3(T)
            else
                a < zero(T) ? zero(T) : nextfloat(zero(T))
            end
        end
        d = a / b
        x, y = Base.mul12(d, b)
        x < a || (x == a && y < zero(T)) ? nextfloat(d) : d
    end
end

function div_down(a::T, b::T) where T<:FloatTypes
    if iszero(a) || iszero(b) || isinf(a) || isinf(b) || isnan(a) || isnan(b)
        a / b
    else
        if b < zero(T)
            a *= -1
            b *= -1
        end
        if abs(a) < c_1(T)
            if abs(b) < c_4(T)
                a *= c_3(T)
                b *= c_3(T)
            else
                a < zero(T) ? prevfloat(zero(T)) : zero(T)
            end
        end
        d = a / b
        x, y = Base.mul12(d, b)
        x > a || (x == a && y > zero(T)) ? prevfloat(d) : d
    end
end