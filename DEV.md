## DEPENDENCIES
  - @material-ui (core, lab, icons) : It's the UI Framework I've decided to use. It's simple, elegant and don't use jQuery (in comparaison of bootstrap).
  - react-router-dom : easy routing, basically, the current website only use one route /chat/:uri but we can imagine that it will need a /login, /logout, /register, /home etc ...
  - clsx : simple utily function that helps making className for react components (it's used by default in material-ui doc)
  - prop-types : Necessary when we want our component to runtime check (in dev) if props are correctly passed
  - typescript : Writing react with Typescript is really beautiful and helps making website more stable

## IMPROVEMENTS
  - testing : basically, react / typescript / prop-types and good practices around hooks and context, helps alot in making stable website ! However, there's a lack of testing on components (especially containers). Testing helps to improve the quality and reduce the number of bugs. I've done severals of them, but more would be better.
  - Better display of dates
  - is private : On the project, it's ain't very clear what the private feature is about. I've reproduce the private feature of Facebook Messenger (whitch basically change the hashing (backend) and put message in italic (frontend)). But for now it's kind of useless
  - messenger features : rooms of multiple users, emoji, gif, adaptative content, scroll to end when too there's a lot of message, only fetch a sample of messages 

## WHY NO REDUX ?
  - One thing that could be surprising is that there's no redux library in the project. I wanted to keep things simples. But with more logic / components or feature, redux would have been an absolute requirements.
