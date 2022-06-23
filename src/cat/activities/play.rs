pub struct CatToy {
    name: String,
}

impl CatToy {
    pub fn new(name: String) -> CatToy {
        CatToy { name }
    }
    pub fn present(&self) {
        println!("{}", self.name);
    }
}
