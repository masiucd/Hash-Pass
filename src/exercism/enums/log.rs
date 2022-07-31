/// various log levels
#[derive(Clone, PartialEq, Eq, Debug)]
pub enum LogLevel {
    Info,
    Warning,
    Error,
}
/// primary function for emitting logs
pub fn log(level: LogLevel, message: &str) -> String {
    match level {
        LogLevel::Info => format!("{}", info(message)),
        LogLevel::Warning => format!("{}", warn(message)),
        LogLevel::Error => format!("{}", error(message)),
    }
}
pub fn info(message: &str) -> String {
    format!("[INFO]: {}", message)
}
pub fn warn(message: &str) -> String {
    format!("[WARN]: {}", message)
}
pub fn error(message: &str) -> String {
    format!("[ERROR]: {}", message)
}
