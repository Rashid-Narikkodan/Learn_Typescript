 interface Node{
    left:Node|null;
    right:Node|null;
 }
 class Node implements Node{
    left:Node|null=null;
    right:Node|null=null;
    constructor(public value:string){}
 }

interface Tree{
    addNode(value:string):Node
}
class BTree implements Tree{
    private root:Node|null=null
    addNode(value:string){
        let node=new Node(value)
        if(!this.root){
            return this.root=node
        }
        return node
    }
}