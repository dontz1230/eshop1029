<template>
    <div> 
        <div class="cartModal" v-show="opencart" id="cartWindow">
           <button class="cartClose" @click="$emit('closeCart')">
                        <span>&times;</span>
                </button>

            <div class="cartContent">

                

                <div class="cartHeader">
                    <h5 class="cartTitle">小小的購物車</h5> 
                </div>

                <div class="cartBody">
                    <ul>
                        <li v-for="item in this.$store.state.cart">
                        <img :src="item.productImage" width="80px" alt="">
                        {{ item.productName }}
                        <span @click="removeItem" class="float-right">X</span>
                        {{ item.productAmount }}個
                        </li>
                    </ul>
                </div>

                <div class="cartFooter">
                    <button type="button" @click="$emit('closeCart')">繼續購物</button>
                    <button @click="checkout()" type="button" class="btn btn-primary">完成訂單</button>
                </div>
            </div>
           
        </div>

    </div>
</template>

<script>
export default { 
    props:{
        opencart: {
            type: Boolean,
            required: true,
            default: false
            }
    },
     methods:{
        checkout(){
            this.$emit('closeCart')
            this.$router.push('/checkout')
        },
        removeItem(item){
            this.$store.commit('removeFromCart',item)
        }
    }
}
</script>

<style lang="scss">
    .cartModal {
        top:50%;
        right:50%;
        transform:translate(50%,50%);
        width: 400px;
        background:white;
        padding:20px;
        position: absolute;
        z-index: 5;
        border-radius: 10px;
        border: 1px solid #ff9a9e;
        box-shadow: 2px 2px 4px rgba(0,0,0,0.25);

        >.cartClose {
            border-radius: 50%;
            height:30px;
            width:30px;
            position: absolute;
            top: -10px;
            right: -10px;
            background:white;
            color: rgb(255, 128, 128);
            border: 1px solid rgb(255, 128, 128);
            overflow: hidden;
            > span {
                height: 15px;
                font-size: 30px;
                margin: 0;
                padding:0;
                position: absolute;
                top: -10px;
                right: 0;
            }

            &:hover{
                background:rgb(255, 128, 128);
                color: white;
            }
        }

        > .cartContent {
            position: relative;

            > .cartHeader {
                position: relative;
                height:2rem;
                border-bottom: 1px solid black;
                
            }

            > .cartBody {
                padding: 10px;
                margin: 10px auto;
            }

            > .cartFooter {

            }
        }
       
    
    }
</style>