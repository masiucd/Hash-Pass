pub mod lasagna_exercism {

    #[allow(dead_code)]
    pub fn expected_minutes_in_oven() -> i32 {
        40
    }

    #[allow(dead_code)]
    pub fn remaining_minutes_in_oven(actual_minutes_in_oven: i32) -> i32 {
        expected_minutes_in_oven() - actual_minutes_in_oven
    }

    #[allow(dead_code)]
    pub fn preparation_time_in_minutes(number_of_layers: i32) -> i32 {
        number_of_layers * 2
    }

    #[allow(dead_code)]
    pub fn elapsed_time_in_minutes(number_of_layers: i32, actual_minutes_in_oven: i32) -> i32 {
        preparation_time_in_minutes(number_of_layers) + actual_minutes_in_oven
    }
}
