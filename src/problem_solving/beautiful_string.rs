fn beautiful_string(input: String) -> bool {
    let mut arr: [i8; 26] = [0; 26];
    for c in input.chars() {
        let index = c as usize - 'a' as usize;
        arr[index as usize] += 1;
    }
    let mut max = std::usize::MAX;
    let mut ok = true;
    for &n in arr.iter() {
        if n as usize > max {
            ok = false;
        }
        max = n as usize;
    }
    ok
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn aabbb_falsy() {
        assert_eq!(false, beautiful_string("aabbb".to_string()));
    }
    #[test]
    fn bbbaa_falsy() {
        assert_eq!(false, beautiful_string("bbbaa".to_string()));
    }
    #[test]
    fn abcdefghijklmnopqrstuvwxyzz_falsy() {
        assert_eq!(
            false,
            beautiful_string("abcdefghijklmnopqrstuvwxyzz".to_string())
        );
    }
    #[test]
    fn abcdefghijklmnopqrstuvwxyz_falsy() {
        assert_eq!(
            true,
            beautiful_string("abcdefghijklmnopqrstuvwxyz".to_string())
        );
    }
}
