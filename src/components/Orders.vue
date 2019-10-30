<template> 
    <div class="orders"> 

        <div class="orderTitle">
            <h1>所有訂單</h1>
        </div>
        
        <div class="orderBody">
                    <ul>
                        <li v-for="item in this.$store.state.cart">
                            <img :src="item.productImage" width="50px" alt="">
                            <span>{{ item.productName }}</span>
                            <span>{{ item.productAmount }}個</span>
                            
                        </li>
                        <span>總共 {{ this.$store.getters['totalPrice']}} 元</span>
                    </ul>
        </div>
               
    </div>
</template>

<script>
export default { 
    
}

</script>

<style lang="scss">
@import '../assets/style.scss';

    .orderTitle {
        background: url('../assets/orderimg2.png');
        background-position: center;
        background-repeat: no-repeat;
        min-height:500px;
        position: relative;
        > h1 {
            position: absolute;
            top:50%;
            left:5%;
        }
    }
</style>