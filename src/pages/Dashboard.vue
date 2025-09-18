<template>
  <div>
    <h2>This is Micro Frontend App Dashboard</h2>
    <h3>Loading....</h3>
    <p>{{description}}</p>
  </div>
</template>

<script>
export default {
   props: {
    description: {
        type: String
    },
   
    }
};
</script>
