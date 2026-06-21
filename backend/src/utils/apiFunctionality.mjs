class ApiFunctionality {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        const regex = {
            $regex: this.queryStr.keyword,
            $options: "i"
        };

        const keyword = this.queryStr.keyword? {
            $or: [
                { name: regex},
                { description: regex},
                {category: regex}
            ]
            }: {};

        console.log(keyword)
        this.query = this.query.find(keyword);

        return this;
    }

    filter(){
        const qCopy = {...this.queryStr}
        const removeFeilds = ["keyword", "limit", "page"];
        removeFeilds.forEach((key)=>{delete qCopy[key]})

        this.query = this.query.find(qCopy)

        return this
        
    }
}

export default ApiFunctionality;