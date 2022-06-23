mod json_data;
fn main() {
    let list = json_data::get_people_list();
    let last_person = json_data::last_person(list);
    println!("Last person: {:?}", last_person);

    // let point = Point { x: 1, y: 2 };

    // let json_data = fs::read_to_string("./data.json").unwrap();
    // let deserialized_json_data: Vec<Person> = serde_json::from_str(&json_data).unwrap();

    // for person in &deserialized_json_data {
    //     println!("{:?}", person);
    // }

    // let serialized = serde_json::to_string(&point).unwrap();

    // println!("serialized = {}", serialized);

    // let deserialized: Point = serde_json::from_str(&serialized).unwrap();
    // println!("deserialized = {:?}", deserialized);

    // let last = last_person(deserialized_json_data);
    // println!("last = {:?}", last);
}
