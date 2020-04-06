<template>
  <div class="footer">
    <ul>
      <li>&#10004; Criado com VUE</li>
      <li>
        Data from
        <a href="https://www.themoviedb.org/documentation/api">The Movie Data Base API</a>
      </li>
      <li>
        <a href="https://github.com/Brettas/projetocinema">
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
        style="width:50px;height:50px;">GitHub Do Projeto</a>
      </li>
      <li>
        &copy;By
        <a href="https://github.com/Brettas/">Vinicius Brêttas</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  margin: 0 auto;
  padding: 4em 0;
  text-align: center;
  font-size: 1em;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0
}
li {
  display: block;
  padding: 1em;
}
a {
  font-size: 1em;
  color: white;
  &:hover {
    color: white;
    background-color: $color-primary;
    
  }
}
@include sm {
  .footer{
    max-width: 1000px;
  }
  ul{
    display: flex;
  }
  li {
    display: inline;
    padding-right: 2em;
    text-align: left;

    &:last-child{
      flex-grow: 1;
      padding-right: 1em;
      text-align: right;
    }
  }
}
</style>