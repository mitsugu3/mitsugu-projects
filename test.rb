(1..100).each{|n|
    if n % 15 == 0
        puts "まる"
    else
        if n % 3 == 0
            puts "ばつ"
        else
            if n % 5 == 0
                puts "さんかく"
            else

            puts n
            end
        end
    end

}
