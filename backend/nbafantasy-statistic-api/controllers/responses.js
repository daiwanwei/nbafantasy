function responseWithData(res,code=null,msg=null,data=null){
    res.status(200).send({
        code: code,
        msg: msg,
        data:data,
    });
}

function responseWithoutData(res,code=null,msg=null){
    res.status(200).send({
        code: code,
        msg: msg?msg:null,
    });
}

module.exports={
    responseWithData:responseWithData,
    responseWithoutData:responseWithoutData,
}
