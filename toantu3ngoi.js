// let message ='';
// let login= '';
// if ( login =='Emloyee'){
//     message ='Hello';
// }else if (login == 'Director'){
//     message ='Greetings';
//
// }else if(login =='') {
//     message = 'No login';
// }else {
//     message ='';
// }
let now =prompt('Nhấp vào đây : ') // người dùng viết vào trong hộp
let massage = (now =='Emloyee') ?
    'Hello' :
    (now == 'Director') ?
        'Greetings' :
        (now=='') ?
            'No now' :
            '';
alert(massage); // hiển thị thông báo trong hộp