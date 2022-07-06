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
    fn peek(&self) -> Option<&i32> {
        self.items.get(self.items.len() - 1)
    }
    fn len(&self) -> usize {
        self.size
    }
    fn print(&self) {
        let xs = self
            .items
            .iter()
            .map(|x| x.to_string())
            .collect::<Vec<String>>();
        println!("{:?}", xs.join(" -> "));
    }
}

fn main() {
    let mut stack = Stack::new();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.print();
    let last = stack.peek().unwrap();
    println!("{}", last);
}
