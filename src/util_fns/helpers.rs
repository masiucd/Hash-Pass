pub fn is_even<T>(n: T) -> bool
where
    T: std::ops::Add<Output = T>
        + std::ops::Sub<Output = T>
        + std::ops::Mul<Output = T>
        + std::ops::Div<Output = T>
        + std::ops::Rem<Output = T>
        + std::fmt::Display,
{
    n % 2 == 0
}
