# Nico style twitch chat for streamlabs

To use:  

-Open nicoTwitchChat.css on github  
-Copy the text from nicoTwitchChat.css   
-Open up streamlabs' dashboard  
-Go to Chat Box  
-Scroll down to Enable Custom HTML/CSS and hit Enabled  
-Paste the copied text in the CSS tab. Make sure to replace all the existing text  
-Copy the text from nicoTwitchChat.js  
-Paste the copied text in the JS tab.  Make sure to replace all the existing text  
-Copy the text from nicoTwitchChat.html  
-Paste the copied text in the HTML tab.  Make sure to replace all the existing text  

-Add a browser source to OBS with the chat widget URL (You can find this near the top of the Chat Box page)  
--I recommend setting the Width, Height, and FPS to the same as your stream settings  
--(This probably works with xsplit too but I haven't tested it)  

Recommended streamlabs Settings:  
-Badges: All disabled  
-Extra Emotes: Enabled  
-Font Size: 50px  
-Hide Messages After: Always show Messages  

Updates:  

18/12/21  
-Chatlist item should no longer reappear after scrolling offscreen  

17/12/21  
-Added additional .html and .js files to randomize chat line height  
-Badges and display names can be added without breaking the scrolling animation  
