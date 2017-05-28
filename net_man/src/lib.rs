#[no_mangle]
pub extern "C" fn fibo(n: i32) -> i32 {
    if n <= 2 {
        return 1;
    }

    return fibo(n - 1) + fibo(n - 2);
}