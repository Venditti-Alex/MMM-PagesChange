/**********************
*  MMM-PagesChange v1.1.1      *
*  venditti69500      *
*  08/2023            *
**********************/

Module.register("EXT-Selfies", {
    defaults: {
      debug: false,
      displayButton: true
    },
  
    getStyles: function() {
      let defaultStyle = ["MMM-PagesChange.css", "font-awesome.css"]
      defaultStyle.push(this.defineCSSFile())
      return defaultStyle
    },
  
    
  
    start: function() {
      this.resourcesPatch = "/modules/MMM-PagesChange/resources/"
      this.logoPages = this.resourcesPatch
      this.logo= {
        Back: this.resourcesPatch + "back.png",
        Home: this.resourcesPatch + "home.png",
        Next: this.resourcesPatch + "next.png",
      }
    },
  
    getDom: function() {
      var pannel = document.createElement("div")
      pannel.id = "PAGES-PANNEL"

      var iconBack = document.createElement("div")
      iconBack.id = "BACK-PAGES-BUTTON"
      iconBack.classList.add("large")
      iconBack.style.backgroundImage = `url(${this.logo.Back})`    
      iconBack.addEventListener("click", (event) => {
        event.BackPage()
      })
      pannel.appendChild(iconBack)
      
      var iconHome = document.createElement("div")
      iconHome.id = "HOME-PAGES-BUTTON"
      iconHome.classList.add("large")
      iconHome.style.backgroundImage = `url(${this.logo.Home})`    
      iconHome.addEventListener("click", (event) => {
        event.HomePage()
      })
      pannel.appendChild(iconHome)
    
      var iconNext = document.createElement("div")
      iconNext.id = "NEXT-PAGES-BUTTON"
      iconNext.classList.add("large")
      iconNext.style.backgroundImage = `url(${this.logo.Next})`    
      iconNext.addEventListener("click", (event) => {
        event.NextPage()
      })
      pannel.appendChild(iconNext)
      dom.appendChild(pannel)
      
      document.body.appendChild(dom)
    },
  
    socketNotificationReceived: function(noti, payload) {
      switch(noti) {
      }
    },
  
    notificationReceived: function(noti, payload, sender) {
      switch(noti) {
      }
    },
})

