 var images = ["familybook.jpg","grandfather.jpg", "grandmother.jpg" , "father.png", "mother.jpg", "daughter.jpg"];
            var names = ["Fmaily Book","Grandfather", "Grandmother", "Father", "Mother", "Daughter"];
            var i = 0;
            function update()
            {
                i++;
                var numbers_of_family_member_in_array = 5
                if(i > numbers_of_family_member_in_array )
                {
                    i = 0;
                }
                var updatedImage = images[i];
                var updatedName  = names[i];
                document.getElementById("family_member_image").src = updatedImage;
                document.getElementById("family_member_name").innerHTML = updatedName;
            }
