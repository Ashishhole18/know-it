export class Cart
{
    constructor(
    public cartid:number,
	public user_uid:number,
	public modelno:string,
    public brand:string,
	public description:string,
	public cost:number,
	public dayfrom:string,
    public dayto:string,
    public prod_id:number,
    public p_imageurl1:string
    )
    {

    }
}