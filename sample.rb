# FizzBuzz問題
# 1から100の値で 5で割り切れる場合 Buzz を、出力、
# 3で割り切れる場合 Fizz を、出力、
# 5と3両方で割り切れる場合 FizzBuzz を、出力.

(1..100).each{|n|       #1から100を変数 n に入れて繰り返す
    # (1..100) 範囲オブジェクト
    if n % 15 == 0      # 条件 n が 15 で割り切れる  が真の場合
      puts "FizzBuzz"   # 出力 "FizzBuzz" という文字列
    elsif n % 3 == 0    # 条件 n が 3 で割り切れる  が真の場合
      puts "Fizz"       # 出力 "Fizz" という文字列
    elsif n % 5 == 0    # 条件 n が 5 で割り切れる  が真の場合
      puts "Buzz"       # 出力 "Buzz" という文字列
    else                #そのほかの値
      puts n            # n を出力
    end
  }

#   オブジェクト.each do |変数|
#     繰り返す処理
#     end
        