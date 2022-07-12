pub fn array_max(input: Vec<i32>, k: i32) -> i32 {
    input
        .windows(k as usize)
        .map(|x| x.iter().sum())
        .max()
        .unwrap()
}

#[test]
fn test_array_max() {
    assert_eq!(array_max(vec![1, 2, 3, 4, 5, 6, 7, 8, 9], 2), 17);
    assert_eq!(array_max(vec![4, 2, 1, 3], 1), 4);
    assert_eq!(array_max(vec![4, 2, 1, 3], 2), 6);
}
