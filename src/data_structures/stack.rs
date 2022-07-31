pub struct Stack {
    pub data: Vec<i32>,
    pub size: usize,
}

pub trait Stackable {
    fn push(&mut self, value: i32);
    fn pop(&mut self) -> i32;
    fn len(&self) -> usize;
    fn peek(&self) -> i32;
    fn new() -> Self;
}

impl Stackable for Stack {
    fn new() -> Stack {
        Stack {
            data: Vec::new(),
            size: 0,
        }
    }
    fn push(&mut self, value: i32) {
        self.data.push(value);
        self.size += 1;
    }

    fn pop(&mut self) -> i32 {
        self.size -= 1;
        self.data.pop().unwrap()
    }

    fn len(&self) -> usize {
        self.size
    }

    fn peek(&self) -> i32 {
        match self.data.get(self.data.len() - 1) {
            Some(x) => *x,
            None => -1,
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_stack() {
        let mut stack = Stack {
            data: vec![],
            size: 0,
        };
        stack.push(1);
        stack.push(2);
        stack.push(3);
        assert_eq!(stack.len(), 3);
        assert_eq!(stack.peek(), 3);
        assert_eq!(stack.pop(), 3);
        assert_eq!(stack.pop(), 2);
        assert_eq!(stack.pop(), 1);
        assert_eq!(stack.len(), 0);
    }
}
