class ExpressError extends Error{
    constructor(status,message){
        super();
        this.satus=status;
        this.message=message;
    }
}
module.exports=ExpressError;