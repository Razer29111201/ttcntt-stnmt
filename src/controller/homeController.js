import pool from "../../config/connetDB";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const saltRounds = 10;

const getHomePage = async (req, res) => {

    const [slide, fields] = await pool.execute('SELECT * FROM `slide` ORDER BY id DESC');
    const news = await pool.execute('SELECT * FROM `news`ORDER BY id DESC');

    return res.render('index.ejs', { slide: slide, news: news[0] })

}

const accpost = async (req, res, next) => {
    const acc = await pool.execute('SELECT * FROM `account`');
    var user = req.body.user
    var pass = req.body.pass
    var account = acc[0].map(element => {

        if (user === element.user || pass === element.pass) {
            console.log('thanh con')
            next()
        } else {
            console.log('thats bai');
        }

        req.role = element.role
        return element
    })




    return res.send('aaa')
}
const checkUser = async (req, res, next) => {
    const acc = await pool.execute('SELECT * FROM `account`');
    var account = acc[0].map(element => {
        if (element.role == 'user') {
            console.log('aaaa');
        }
    })

}



const getadmin = async (req, res, next) => {
    const acc = await pool.execute('SELECT * FROM `account`');
    const slide = await pool.execute('SELECT * FROM `slide` ORDER BY id DESC');
    const news = await pool.execute('SELECT * FROM `news` ORDER BY id DESC');
    const [ttvb] = await pool.execute('SELECT * FROM `ttvb` ORDER BY id DESC');

    return res.render('admin.ejs', { acc: acc[0], slide: slide[0], news: news[0], ttvb: ttvb })
}
const getaddnews = (req, res) => {




    res.render('addnews.ejs')
}
const getadd = async (req, res) => {
    console.log(req.body, req.file)
    var file = req.file.path.split('\\').splice(2).join('/')
    pool.query('insert into news (heading, title, content,thump,category) values ( ?, ?,?,?,?)',
        [req.body.heading, req.body.title, req.body.editor, file, req.body.category]);

    res.redirect('/admin')


}









const getnews = async (req, res) => {

    const [news] = await pool.execute('SELECT * FROM `news` ORDER BY id DESC');

    return res.render('news.ejs', { news: news })

}
const getaj = async (req, res) => {
    var soelement = 8;
    var page = parseInt(req.query.page) || 1
    var start = (page - 1) * soelement
    var end = page * soelement
    const [news] = await pool.execute('SELECT * FROM `news` ORDER BY id DESC');
    var total = news.length
    console.log(page, start, end, total);

    return res.json({ news: news.slice(start, end), total: total })

}



let getdetailnews = async (req, res) => {


    let newsid = req.params.newsid
    const newid = await pool.execute('select * from news where id = ?', [newsid])
    const news = await pool.execute('select * from `news`')



    return res.render('newsdetail.ejs', { newid: newid[0], news: news[0] })
}
let deletenews = async (req, res) => {


    let deletenew = req.body.deletenew
    const newid = await pool.execute('delete from news where id = ?', [deletenew])




    return res.redirect('/admin')
}
let deletettvb = async (req, res) => {


    let id = req.body.id
    await pool.execute(`delete from ttvb where id = ${id}`)




    return res.redirect('/admin')
}
let getedit = async (req, res) => {
    let id = req.params.id
    console.log(id);
    console.log(id);
    const [idedit] = await pool.execute('select * from news where id = ?', [id])
    console.log(idedit);
    return res.render('editnews', { idedit: idedit[0] })
}
let geteditttvb = async (req, res) => {
    let id = req.params.id

    console.log(id);
    const [idedit] = await pool.execute('select * from ttvb where id = ?', [id])
    console.log(idedit[0]);
    return res.render('editttvb', { idedit: idedit[0] })
}
let edit = async (req, res) => {

    var file = req.file.path.split('\\').splice(2).join('/')
    await pool.execute('update news set heading = ?, title = ?, content = ?,thump=? where id = ?', [req.body.heading, req.body.title, req.body.content, file, id]);
    console.log(req.body);

    return res.redirect('/admin')
}
let editttvb = async (req, res) => {

    console.log(req.body);

    var file = req.file.path.split('\\').splice(2).join('/')
    await pool.execute(`update ttvb set sovb = '${req.body.heading}', title = '${req.body.title}', content = '${req.body.editor}',linkfile = '${file}',dangvanban = '${req.body.vanban}',chude ='${req.body.chude}' where id = '${req.body.id}'`);



}



const getnewsnctt = async (req, res) => {

    const [cntt] = await pool.execute('SELECT * FROM `news` WHERE `category` = 1');
    console.log(req.role);

    return res.render('newscntt', { cntt: cntt })

}

const getnewshtpt = async (req, res) => {

    const [htpt] = await pool.execute('SELECT * FROM `news` WHERE `category` = 2;');


    return res.render('newshtpt', { htpt: htpt })

}

const getnewstnmt = async (req, res) => {

    const [tnmt] = await pool.execute('SELECT * FROM `news` WHERE `category` = 3;');


    return res.render('newstnmt', { tnmt: tnmt })

}

const getnewshdnb = async (req, res) => {

    const [hdnb] = await pool.execute('SELECT * FROM `news` WHERE `category` = 4');


    return res.render('newshdnb', { hdnb: hdnb })

}


const getnewsnctt1 = async (req, res) => {
    var soelement = 8;
    var page = parseInt(req.query.page) || 1
    var start = (page - 1) * soelement
    var end = page * soelement
    const [cntt] = await pool.execute('SELECT * FROM `news` WHERE `category` = 1');
    var total = cntt.length
    console.log(req.role);

    return res.json({ cntt: cntt.slice(start, end), total: total })

}

const getnewshtpt1 = async (req, res) => {
    var soelement = 8;
    var page = parseInt(req.query.page) || 1
    var start = (page - 1) * soelement
    var end = page * soelement
    const [htpt] = await pool.execute('SELECT * FROM `news` WHERE `category` = 2;');
    var total = htpt.length

    return res.json({ htpt: htpt.slice(start, end), total: total })

}

const getnewstnmt1 = async (req, res) => {
    var soelement = 8;
    var page = parseInt(req.query.page) || 1
    var start = (page - 1) * soelement
    var end = page * soelement
    const [tnmt] = await pool.execute('SELECT * FROM `news` WHERE `category` = 3;');
    var total = tnmt.length

    return res.json({ tnmt: tnmt.slice(start, end), total: total })

}

const getnewshdnb1 = async (req, res) => {
    var soelement = 8;
    var page = parseInt(req.query.page) || 1
    var start = (page - 1) * soelement
    var end = page * soelement
    const [hdnb] = await pool.execute('SELECT * FROM `news` WHERE `category` = 4');
    var total = hdnb.length

    return res.json({ hdnb: hdnb.slice(start, end), total: total })

}
const getlogin = (req, res) => {




    return res.render('acc.ejs')

}
const submitlogin = async (req, res, next) => {

    var user = req.body.user
    var pass = req.body.pass
    const [acc] = await pool.execute('SELECT * FROM `account` ');
    acc.forEach(acc => {
        bcrypt.compare(pass, acc.pass, function (err, result) {

            var data = acc.user === user && result
            if (data) {
                var token = jwt.sign({ id: acc.id }, 'aa')
                next()
                if (acc.id) {


                    return res.json({
                        token: token,
                        mess: acc,
                    });
                }

            } else {
                console.log('sai tài Khoản Mật Khẩu');
            }
        });
    })


}




const ckecklogin = async function (req, res, next) {
    try {
        var token = req.cookies.token

        var id = jwt.verify(token, 'aa')
        if (id) {
            const [acc] = await pool.execute('SELECT * FROM `account` where id = ? ', [id.id])
            req.role = acc[0].role

            next()
        }

    } catch (error) {
        res.json('lox')
    }
}
const ckecklogin1 = async function (req, res, next) {
    try {
        var token = req.cookies.token

        var id = jwt.verify(token, 'aa')
        if (id) {
            const [acc] = await pool.execute('SELECT * FROM `account` where id = ? ', [id.id])
            req.role = acc[0].role
            res.json({ token: token, acc: acc[0] })

        }

    } catch (error) {
        res.json('lox')
    }
}
const checkadmin = function (req, res, next) {
    if (req.role === 1) {
        next()

    } else {
        return res.json('Bạn Chưa đủ Quyền')
    }

}
const register = function (req, res, next) {
    res.render('register.ejs', { mess: '' })

}



const registerpost = async (req, res, next) => {
    var user1 = req.body.user
    var surname = req.body.surname
    var name = req.body.name
    var email = req.body.email
    var pass = req.body.pass
    var sex = req.body.sex
    var passbcry = ''

    var [checkuser1] = await pool.execute(`SELECT * FROM account where user = '${user1}' `)

    if (checkuser1.length > 0) {
        next()
        return res.render('register.ejs', { mess: 'Tên Đăng Nhập Đã Tồn Tại' })

    }
    else {
        bcrypt.hash(pass, saltRounds, function (err, hash) {
            passbcry = hash

            pool.query('insert into account (surname, name, user,Email,pass,sex) values ( ?, ?,?,?,?)',
                [surname, name, user1, email, passbcry, sex]);
        });
        return res.redirect('/login')
    }
}


const getttvb = async (req, res) => {
    var [ttvb] = await pool.execute('SELECT * FROM `ttvb` ORDER BY id DESC');



    res.render('ttvb.ejs', { ttvb: ttvb })

}
const getttvbaj = async (req, res) => {
    var [ttvb] = await pool.execute('SELECT * FROM `ttvb` ORDER BY id DESC');



    res.json({ ttvb: ttvb })

}
const getttvb1 = async (req, res) => {
    var [ttvb] = await pool.execute('SELECT * FROM `ttvb` ORDER BY id DESC');



    res.json({ ttvb: ttvb })

}
const setttvb = async (req, res) => {


    return res.render('addttvb.ejs')

}
const addttvb = async (req, res) => {
    var file = req.file.path.split('\\').splice(2).join('/')
    console.log(file, req.body, req.file);

    pool.query('insert into ttvb (sovb, title, content,linkfile,dangvanban,chude) values ( ?, ?,?,?,?,?)',
        [req.body.heading, req.body.title, req.body.editor, file, req.body.vanban, req.body.vanban]);
    res.redirect('/admin')
}
const gt = async (req, res) => {


    return res.render('gioithieu.ejs')

}




export {
    getHomePage, accpost,
    checkUser, getadmin,
    getaddnews, getadd,
    getnews, getdetailnews,
    deletenews, getedit,
    edit, getnewsnctt,
    getnewshtpt, getnewstnmt,
    getnewshdnb, getlogin,
    submitlogin, ckecklogin,
    ckecklogin1,
    checkadmin, register,
    registerpost, getttvb,
    setttvb, addttvb, getttvb1
    , geteditttvb, editttvb, deletettvb, getttvbaj
    , getaj, getnewsnctt1, getnewshtpt1, getnewstnmt1,
    getnewshdnb1, gt
    // submituser,
    // submitadmin
}
    // , getUser, createUser, deleteUser, viewUpdate, update }
