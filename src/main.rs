mod config;
mod math;
mod problem_solving;
mod util_fns;

#[derive(Debug)]
struct Stack {
    items: Vec<i32>,
    size: usize,
}

impl Stack {
    fn new() -> Stack {
        Stack {
            items: Vec::new(),
            size: 0,
        }
    }
    fn push(&mut self, item: i32) {
        self.items.push(item);
        self.size += 1;
    }
    fn print(&self) {
        for item in self.items {
            println!("{} -> ", item);
        }
    }
}

fn main() {
    let stack = Stack::new();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.print();
}
