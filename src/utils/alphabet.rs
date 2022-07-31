pub fn get_alphabet_as_vec() -> Vec<char> {
    let mut abc = Vec::new();
    for a in 'a'..'z' {
        abc.push(a);
    }
    abc
}

pub fn get_alphabet_as_string() -> String {
    let mut abc = String::new();
    for a in 'a'..'z' {
        abc.push(a);
    }
    abc
}
