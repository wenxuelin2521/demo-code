const fun = async () => {
    // console.log('fun run');
    // return 'fun return'
    throw new Error('报错了')
}

fun().then(res => {
    console.log(res + '111');
}).catch(err => {
    console.log('error' , err);
})