mod helpers;
mod math;
mod models;
use models::dog;
fn main() {
  models::user::print_user();
  dog::doggy()
}
