var documenterSearchIndex = {"docs":
[{"location":"functions/#Functions-1","page":"Functions","title":"Functions","text":"","category":"section"},{"location":"functions/#","page":"Functions","title":"Functions","text":"add_up\nadd_down\nsub_up\nsub_down\nmul_up\nmul_down\ndiv_up\ndiv_down\nsqrt_up\nsqrt_down","category":"page"},{"location":"functions/#RoundingEmulator.add_up","page":"Functions","title":"RoundingEmulator.add_up","text":"add_up(a, b)\n\nComputes a + b with the rounding mode  Base.Rounding.RoundUp.\n\njulia> add_up(0.1, 0.2)\n0.30000000000000004\n\njulia> add_up(10.0^308, 10.0^308)\nInf\n\njulia> add_up(-10.0^308, -10.0^308)\n-1.7976931348623157e308\n\njulia> add_up(-0.1, 0.1)\n0.0\n\njulia> add_up(0.0, 0.0)\n0.0\n\njulia> add_up(0.0, -0.0)\n0.0\n\njulia> add_up(-0.0, -0.0)\n-0.0\n\n\n\n\n\n","category":"function"},{"location":"functions/#RoundingEmulator.add_down","page":"Functions","title":"RoundingEmulator.add_down","text":"add_down(a, b)\n\nComputes a + b with the rounding mode Base.Rounding.RoundDown.\n\njulia> add_down(0.1, 0.2)\n0.3\n\njulia> add_down(10.0^308, 10.0^308)\n1.7976931348623157e308\n\njulia> add_down(-10.0^308, -10.0^308)\n-Inf\n\njulia> add_down(-0.1, 0.1)\n-0.0\n\njulia> add_down(0.0, 0.0)\n0.0\n\njulia> add_down(0.0, -0.0)\n-0.0\n\njulia> add_down(-0.0, -0.0)\n-0.0\n\n\n\n\n\n","category":"function"},{"location":"functions/#RoundingEmulator.sub_up","page":"Functions","title":"RoundingEmulator.sub_up","text":"sub_up(a, b)\n\nComputes a - b with the rounding mode Base.Rounding.RoundUp.\n\njulia> sub_up(-0.1, 0.2)\n-0.3\n\njulia> sub_up(-10.0^308, 10.0^308)\n-1.7976931348623157e308\n\njulia> sub_up(10.0^308, -10.0^308)\nInf\n\njulia> sub_up(0.1, 0.1)\n0.0\n\njulia> sub_up(0.0, 0.0)\n0.0\n\njulia> sub_up(0.0, -0.0)\n0.0\n\njulia> sub_up(-0.0, 0.0)\n-0.0\n\njulia> sub_up(-0.0, -0.0)\n0.0\n\n\n\n\n\n","category":"function"},{"location":"functions/#RoundingEmulator.sub_down","page":"Functions","title":"RoundingEmulator.sub_down","text":"sub_down(a, b)\n\nComputes a - b with the rounding mode Base.Rounding.RoundDown.\n\njulia> sub_down(-0.1, 0.2)\n-0.30000000000000004\n\njulia> sub_down(-10.0^308, 10.0^308)\n-Inf\n\njulia> sub_down(10.0^308, -10.0^308)\n1.7976931348623157e308\n\njulia> sub_down(0.1, 0.1)\n-0.0\n\njulia> sub_down(0.0, 0.0)\n-0.0\n\njulia> sub_down(0.0, -0.0)\n0.0\n\njulia> sub_down(-0.0, 0.0)\n-0.0\n\njulia> sub_down(-0.0, -0.0)\n-0.0\n\n\n\n\n\n","category":"function"},{"location":"functions/#RoundingEmulator.mul_up","page":"Functions","title":"RoundingEmulator.mul_up","text":"mul_up(a, b)\n\nComputes a * b with the rounding mode Base.Rounding.RoundUp.\n\njulia> mul_up(0.1, 0.2)\n0.020000000000000004\n\njulia> mul_up(10.0^308, 10.0^308)\nInf\n\njulia> mul_up(10.0^308, -10.0^308)\n-1.7976931348623157e308\n\njulia> mul_up(5.0e-324, 5.0e-324)\n5.0e-324\n\njulia> mul_up(-0.1, 0.1)\n-0.01\n\njulia> mul_up(0.0, 0.0)\n0.0\n\njulia> mul_up(0.0, -0.0)\n-0.0\n\njulia> mul_up(-0.0, -0.0)\n0.0\n\n\n\n\n\n","category":"function"},{"location":"functions/#RoundingEmulator.mul_down","page":"Functions","title":"RoundingEmulator.mul_down","text":"mul_down(a, b)\n\nComputes a * b with the rounding mode Base.Rounding.RoundDown.\n\njulia> mul_down(0.1, 0.2)\n0.02\n\njulia> mul_down(10.0^308, 10.0^308)\n1.7976931348623157e308\n\njulia> mul_down(10.0^308, -10.0^308)\n-Inf\n\njulia> mul_down(5.0e-324, 5.0e-324)\n0.0\n\njulia> mul_down(-0.1, 0.1)\n-0.010000000000000002\n\njulia> mul_down(0.0, 0.0)\n0.0\n\njulia> mul_down(0.0, -0.0)\n-0.0\n\njulia> mul_down(-0.0, -0.0)\n0.0\n\n\n\n\n\n","category":"function"},{"location":"functions/#RoundingEmulator.div_up","page":"Functions","title":"RoundingEmulator.div_up","text":"div_up(a, b)\n\nComputes a / b with the rounding mode Base.Rounding.RoundUp.\n\njulia> div_up(0.1, 0.3)\n0.33333333333333337\n\njulia> div_up(-0.0, 1.0)\n-0.0\n\n\n\n\n\n","category":"function"},{"location":"functions/#RoundingEmulator.div_down","page":"Functions","title":"RoundingEmulator.div_down","text":"div_down(a, b)\n\nComputes a / b with the rounding mode Base.Rounding.RoundDown.\n\njulia> div_down(0.1, 0.3)\n0.3333333333333333\n\njulia> div_down(-0.0, 1.0)\n-0.0\n\n\n\n\n\n","category":"function"},{"location":"functions/#RoundingEmulator.sqrt_up","page":"Functions","title":"RoundingEmulator.sqrt_up","text":"sqrt_up(a)\n\nComputes sqrt(a) with the rounding mode Base.Rounding.RoundUp.\n\njulia> sqrt_up(2.0)\n1.4142135623730951\n\njulia> sqrt_up(-0.0)\n-0.0\n\n\n\n\n\n","category":"function"},{"location":"functions/#RoundingEmulator.sqrt_down","page":"Functions","title":"RoundingEmulator.sqrt_down","text":"sqrt_down(a)\n\nComputes sqrt(a) with the rounding mode Base.Rounding.RoundDown.\n\njulia> sqrt_down(2.0)\n1.414213562373095\n\njulia> sqrt_down(-0.0)\n-0.0\n\n\n\n\n\n","category":"function"},{"location":"references/#References-1","page":"References","title":"References","text":"","category":"section"},{"location":"references/#","page":"References","title":"References","text":"IEEE Computer Society, IEEE Standard for Floating-Point Arithmetic,\" in IEEE Std 754-2019 (Revision of IEEE 754-2008), pp.1-84, https://doi.org/10.1109/IEEESTD.2019.8766229, 22 July 2019  \nMasahide Kashiwagi, Saikinten ni yoru houkou tsuki marume no emulate [Emulation of Rounded Arithmeticin Rounding to Nearest], http://verifiedby.me/adiary/pub/kashi/image/201406/nas2014.pdf, http://verifiedby.me/adiary/pub/kashi/image/201406/nas2014-slide.pdf, 2014  \nMasahide Kashiwagi, Error Free Transformation (EFT) is NOT error-free, http://verifiedby.me/adiary/09, 2014\nkv - a C++ Library for Verified Numerical Computation  \nJeffreySarnoff/FastRounding.jl","category":"page"},{"location":"#RoundingEmulator.jl-1","page":"Home","title":"RoundingEmulator.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Emulate directed rounding using only the default rounding mode. ","category":"page"},{"location":"#","page":"Home","title":"Home","text":"This package is meant to produce the exact same results of Rounding.setrounding (deprecated) without switching rounding modes.","category":"page"},{"location":"#Requirements-1","page":"Home","title":"Requirements","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Julia 1.3 or higher\nBase.Rounding.get_zero_subnormals() == true. (See Base.Rounding.getzerosubnormals)","category":"page"},{"location":"#Use-1","page":"Home","title":"Use","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"This package provides","category":"page"},{"location":"#","page":"Home","title":"Home","text":"add_up, add_down - Addition\nsub_up, sub_down - Subtraction\nmul_up, mul_down - Multiplication\ndiv_up, div_down - Division\nsqrt_up, sqrt_down - Square root","category":"page"},{"location":"#","page":"Home","title":"Home","text":"up: Round up, down: Round down","category":"page"},{"location":"#","page":"Home","title":"Home","text":"julia> using RoundingEmulator\n\njulia> add_up(0.1, 0.2)\n0.30000000000000004\n\njulia> bitstring(add_up(0.1, 0.2))\n\"0011111111010011001100110011001100110011001100110011001100110100\"\n\njulia> add_down(0.1, 0.2)\n0.3\n\njulia> bitstring(add_down(0.1, 0.2))\n\"0011111111010011001100110011001100110011001100110011001100110011\"\n\njulia> sub_up(-0.1, 0.2)\n-0.3\n\njulia> bitstring(sub_up(-0.1, 0.2))\n\"1011111111010011001100110011001100110011001100110011001100110011\"\n\njulia> sub_down(-0.1, 0.2)\n-0.30000000000000004\n\njulia> bitstring(sub_down(-0.1, 0.2))\n\"1011111111010011001100110011001100110011001100110011001100110100\"\n\njulia> mul_up(0.1, 0.2)\n0.020000000000000004\n\njulia> bitstring(mul_up(0.1, 0.2))\n\"0011111110010100011110101110000101000111101011100001010001111100\"\n\njulia> mul_down(0.1, 0.2)\n0.02\n\njulia> bitstring(mul_down(0.1, 0.2))\n\"0011111110010100011110101110000101000111101011100001010001111011\"\n\njulia> div_up(1.0, 3.0)\n0.33333333333333337\n\njulia> bitstring(div_up(1.0, 3.0))\n\"0011111111010101010101010101010101010101010101010101010101010110\"\n\njulia> div_down(1.0, 3.0)\n0.3333333333333333\n\njulia> bitstring(div_down(1.0, 3.0))\n\"0011111111010101010101010101010101010101010101010101010101010101\"\n\njulia> sqrt_up(2.0)\n1.4142135623730951\n\njulia> bitstring(sqrt_up(2.0))\n\"0011111111110110101000001001111001100110011111110011101111001101\"\n\njulia> sqrt_down(2.0)\n1.414213562373095\n\njulia> bitstring(sqrt_down(2.0))\n\"0011111111110110101000001001111001100110011111110011101111001100\"","category":"page"},{"location":"#Corner-cases-1","page":"Home","title":"Corner cases","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"julia> u = nextfloat(zero(Float64))\n5.0e-324\n\njulia> v = floatmax(Float64)\n1.7976931348623157e308\n\njulia> v + v\nInf\n\njulia> add_up(v, v)\nInf\n\njulia> add_down(v, v)\n1.7976931348623157e308\n\njulia> u * u\n0.0\n\njulia> mul_up(u, u)\n5.0e-324\n\njulia> mul_down(u, u)\n0.0\n\njulia> 1.0 / u\nInf\n\njulia> div_up(1.0, u)\nInf\n\njulia> div_down(1.0, u)\n1.7976931348623157e308","category":"page"},{"location":"#Signed-zero-1","page":"Home","title":"Signed zero","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"RoundingEmulator follows the special rules for signed zero specified in the chapter 6.3 of IEEE 754-2019.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"julia> add_up(-1.0, 1.0)\n0.0\n\njulia> add_down(-1.0, 1.0)\n-0.0\n\njulia> add_up(-0.0, 0.0)\n0.0\n\njulia> add_down(-0.0, 0.0)\n-0.0\n\njulia> add_up(0.0, 0.0)\n0.0\n\njulia> add_down(0.0, 0.0)\n0.0\n\njulia> sqrt_up(-0.0)\n-0.0\n\njulia> sqrt_down(-0.0)\n-0.0","category":"page"}]
}
