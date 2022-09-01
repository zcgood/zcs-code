function groupThePeople(groupSizes: number[]): number[][]{
    const map: Map<number, number[]> = new Map<number, number[]>(),
    ans: number[][] = new Array<number[]>()
    for(const [i,v] of groupSizes.entries()){
        if(!map.has(v)){
            map.set(v,new Array<number>())
        }
        map.get(v).push(i)
    }
    map.forEach((v,k)=>{
        for(let i = 0; i < v.length; i+=k){
            ans.push(v.slice(i,i+k))
        }
    })
    return ans
}