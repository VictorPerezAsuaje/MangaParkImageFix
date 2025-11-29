# MangaPark Image Fix

A very simple Chrome/Chromium extension that temporarily fixes the image loading issue on MangaPark (for as long as the s01 host holds on). It will require you to allow permission for:

- ActiveTab: Used to access your current MangaPark tab so that it can execute the code to replace the image.
- Scripting: Literally the code to be executed (can be inspected on the file [index.js](https://github.com/VictorPerezAsuaje/MangaParkImageFix/blob/main/index.js))

## Alternative
Chrome is still approving the extension, but in the meantime you can also use it locally without depending on Chrome Web Store if you don't want to wait.

**IMPORTANT:** Even if the code is safe to use, do not trust code blindly, only do this if you understand the code within this project or make sure to at least pass it through an LLM (Copilot, ChatGPT, Claude or whichever you prefer) so that at least you can feel safe when doing this.

That said, here are the steps:

1. Access Chrome Extensions: [chrome://extensions/](chrome://extensions/)
2. At the top right, make sure that the "Developer Mode" toggle is active.
  <img width="1915" height="55" alt="image" src="https://github.com/user-attachments/assets/f4be4c7d-82cf-40aa-8e0b-e60db3a2fbf6" />

3. Once it's active, it will turn blue and show you three new buttons at the top left.
<img width="1915" height="110" alt="image" src="https://github.com/user-attachments/assets/8558a8d1-4471-47f6-8593-130b4117a46b" />

4. Keep the tab open and now download a Zip File with the contents of this repository by clicking on the "Code" button and then on "Download ZIP"
<img width="1161" height="595" alt="image" src="https://github.com/user-attachments/assets/bdb2bdff-0a74-4159-8d4c-87863edab88c" />

5. Unzip it somewhere you can find easily and copy the path/route to that folder.
6. Go back you your chrome extensions tab and click on "Load Unpacked"
<img width="430" height="109" alt="image" src="https://github.com/user-attachments/assets/5068e47e-5095-4e37-a089-606fc9cfa51d" />

7. Paste the path/route to the folder at the top and click on "Select directory"
<img width="724" height="66" alt="image" src="https://github.com/user-attachments/assets/98d794f3-715a-487d-8f4c-eac40f7611f3" />

8. Once you do that, you will see the extension appear:
<img width="812" height="438" alt="image" src="https://github.com/user-attachments/assets/cddb07d3-2caa-4797-8d72-f395d25bd1c7" />

9. Now you can go to any MangaPark link that has a broken image due to pointing to a host that does not load the image, like in the example below the s02:
<img width="1909" height="876" alt="image" src="https://github.com/user-attachments/assets/6ae9d38a-1cf1-404d-aa8f-59311ff9af14" />

10. And click on your extension and then on "Fix images", the url of all images of the page will change to the s01 and will load properly.

**Note**: This is a temporary measure, I can not guarantee how long will the s01 host will hold, so use this but knowing it might eventually stop working.


## Project Status
This project is provided **as is**, with no warranties, no support, and no commitment to maintenance.  
It was created solely to help the MangaPark user community.

## License
This project is released under the [CC0 1.0 Universal](LICENSE) Public Domain Dedication.
You are free to use, modify, distribute, or integrate it into other projects without restrictions, with or without attribution.

## Author
Created by [Victor Perez Asuaje](https://github.com/VictorPerezAsuaje)  
Published for the community, with no strings attached.
