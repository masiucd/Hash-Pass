fn main() {
    println!("{:?}", longest_word("WARSZAWA Hello World "));
}

#[test]
fn test_longest_word() {
    assert_eq!(longest_word("Legia Warszawa CWKS"), "Warszawa");
    assert_eq!(longest_word("IFK Goteborg 1904"), "Goteborg");
    assert_eq!(longest_word(""), "");
}

fn longest_word(input: &str) -> &str {
    let words = input.split(' ').collect::<Vec<&str>>();
    let mut longest = words[0].len() as u32;
    let mut longest_word = words[0];
    for word in words.iter() {
        if word.len() as u32 > longest {
            longest = word.len() as u32;
            longest_word = word;
        }
    }
    longest_word
}
