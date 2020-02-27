export class Product {
    constructor( 
        public p_prodid:number,	
        public u_uid:number,
        public p_description:string,
        public p_model:string,
        public p_address:string,
        public p_avlfrom:string,	
        public p_avlto:string,
        public p_deposit:number,	
        public p_imageurl1:string,
        public p_imageurl2:string,
        public p_imageurl3:string,
        public p_brands:string,
        public p_status:string,
        public perdayprice:number
        ){}
}
