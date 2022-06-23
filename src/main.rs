use std::fs;

use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
struct Point {
    x: i32,
    y: i32,
}

#[derive(Serialize, Deserialize, Debug)]
struct Person {
    name: String,
    gender: String,
    age: i32,
}

fn main() {
    let point = Point { x: 1, y: 2 };

    let json_data = fs::read_to_string("./data.json").unwrap();
    let deserialized_json_data: Vec<Person> = serde_json::from_str(&json_data).unwrap();

    for person in &deserialized_json_data {
        println!("{:?}", person);
    }

    let serialized = serde_json::to_string(&point).unwrap();

    println!("serialized = {}", serialized);

    let deserialized: Point = serde_json::from_str(&serialized).unwrap();
    println!("deserialized = {:?}", deserialized);

    let last = last_person(deserialized_json_data);
    println!("last = {:?}", last);
}

fn last_person(list: Vec<Person>) -> Person {
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
