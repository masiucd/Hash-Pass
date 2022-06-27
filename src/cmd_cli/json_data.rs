// pub mod json_data;

use std::{error::Error, fs};

use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
struct Point {
    x: i32,
    y: i32,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct Person {
    pub name: String,
    pub gender: String,
    pub age: i32,
}

pub fn get_people_list() -> Vec<Person> {
    let json_data = fs::read_to_string("./data.json");
    match json_data {
        Ok(file) => {
            let res: Vec<Person> = serde_json::from_str(&file).unwrap();
            res
        }
        Err(err) => panic!("Error reading data.json: {}", err),
    }
    // let deserialized_json_data: Vec<Person> = serde_json::from_str(&json_data).unwrap();
}

pub fn last_person(list: Vec<Person>) -> Person {
    let mut last_person = Person {
        name: "".to_string(),
        age: 0,
        gender: "male".to_string(),
    };
    for p in list {
        last_person = p;
    }
    last_person
}
