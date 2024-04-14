import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useCookies } from 'react-cookie';

const MyComponent = () => {
    const [cookies, setCookie, removeCookie] = useCookies();
}

const lessons = [

]

function saveSelection() {
    const checkboxes = document.querySelectorAll(no 'input[name="items"]:checked');
    const selectedItems = Array.from(checkboxes).map(checkbox => checkbox.value);
  
    document.cookie = `selectedItems=${JSON.stringify(selectedItems)}; path=/`;

    lessons.push(getSelectedItems())
  }

  function getSelectedItems() {
    const cookies = document.cookie.split(';');
    const selectedItemsCookie = cookies.find(cookie => cookie.trim().startsWith('selectedItems='));
  
    if (selectedItemsCookie) {
      const selectedItems = JSON.parse(selectedItemsCookie.split('=')[1]);
      return selectedItems;
    }
  
    return [];
  }

  
  
function Survey(){
    return(
        <form>
            <label>Select items:</label>
            <div>
                <input type="checkbox" name="middle school student" value="student_lvl1"> </input>
                <input type="checkbox" name="high school student" value="student_lvl2"> </input>
                <input type="checkbox" name="college student" value="student_lvl3"> </input>
            </div>
            <button type="button" onclick="saveSelection()">Save Selection</button>
        </form>

        
    );
}