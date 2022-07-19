use std::collections::LinkedList;

pub struct Queue {
    pub items: LinkedList<i32>,
    pub size: usize,
}

trait Queueable {
    fn enqueue(&mut self, item: i32);
    fn dequeue(&mut self) -> i32;
    fn is_empty(&self) -> bool;
    fn peek(&self) -> i32;
    fn make() -> Queue;
}

impl Queueable for Queue {
    fn enqueue(&mut self, item: i32) {
        self.items.push_front(item);
        self.size += 1;
    }
    fn dequeue(&mut self) -> i32 {
        let item = self.items.pop_back().unwrap();
        self.size -= 1;
        item
    }
    fn is_empty(&self) -> bool {
        self.size == 0
    }
    fn peek(&self) -> i32 {
        self.items.back().unwrap().clone()
    }
    fn make() -> Queue {
        Queue {
            items: LinkedList::new(),
            size: 0,
        }
    }
}

#[cfg(test)]
mod tests {
    use super::Queueable;
    #[test]
    fn queue_demo() {
        let mut queue = super::Queue::make();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        assert_eq!(queue.peek(), 1);
        assert_eq!(queue.size, 3);
        assert_eq!(queue.is_empty(), false);

        queue.dequeue();
        queue.dequeue();
        assert_eq!(queue.peek(), 3);
        assert_eq!(queue.size, 1);
        assert_eq!(queue.is_empty(), false);

        queue.dequeue();
        assert_eq!(queue.size, 0);
        assert_eq!(queue.is_empty(), true);
    }
}
