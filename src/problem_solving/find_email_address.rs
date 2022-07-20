pub fn solution(address: String) -> String {
    address
        .split("@")
        .collect::<Vec<_>>()
        .last()
        .unwrap()
        .to_string()
}

#[cfg(test)]
mod tests {

    use super::*;
    // use crate::*;
    #[test]
    fn gmail_com() {
        assert_eq!(
            solution(String::from("marcell@gmail.com")),
            String::from("gmail.com")
        );
    }
    #[test]
    fn yahoo_com() {
        assert_eq!(
            solution(String::from("marcell@yahoo.com")),
            String::from("yahoo.com")
        )
    }
    #[test]
    fn usual_com() {
        assert_eq!(
            solution(String::from("\"very.unusual.@.unusual.com\"@usual.com")),
            String::from("usual.com")
        )
    }
}
