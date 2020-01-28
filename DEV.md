# DEPENDENCIES
  - @material-ui (core, lab, icons) : It's the UI Framework I've decided to use. It's simple, elegant and don't use jQuery (in comparaison of bootstrap).
  - react-router-dom : easy routing, basically, the current website only use one route /chat/:uri but we can imagine that it will need a /login, /logout, /register, /home etc ...
  - clsx : simple utily function that helps making className for react components (it's used by default in material-ui doc)
  - prop-types : Necessary when we want our component to runtime check (in dev) if props are correctly passed
  - typescript : Writing react with Typescrit is really beautiful and helps making website more mature

# IMPROVEMENTS
  - testing : basically, react / typescript / prop-types and good practices around hooks and context, helps alot in making website great ! But here, there's a lack of testing on components. Testing helps to improve the quality and reduce the number of possibles bugs. I've done several of them, but more would be better.

# WHY NO REDUX ?
  - One thing that could be surprising is that there's no redux library in the project. I wanted to keep things simples. But with more logic / components or feature, redux would have been an absolute requirements.
