
# Project Link

[City Sorter](https://ondemandsorter.netlify.app/)

[![Screenshot-452.png](https://i.postimg.cc/fWK4JpGb/Screenshot-452.png)](https://postimg.cc/t7YvcSC0)
# City Sorter

This is an app used when we have data of cities and their respective rents along with a few attributes, and now we need to find all possible combinations of cities that satisfy the given total max rent and other attributes. 

## Steps to use this App 

### Step 1

You must have an excel data where you have these 4 columns: Place, Monthly_Rent, Category, Sub_Category.

[![Screenshot-454.png](https://i.postimg.cc/fbC9pw3d/Screenshot-454.png)](https://postimg.cc/d773TcjQ)

### Step 2

You need to convert it into json format. You can simply do it with a google search for an excel to json converter.

**Sample Given Below** [You can copy it for a trial]

```javascript
[
    {
        "Place": "Mumbai",
        "Monthly_Rent": "142000",
        "Category": "I",
        "Sub_Category": "A"
    },
    {
        "Place": "Delhi",
        "Monthly_Rent": "117000",
        "Category": "I",
        "Sub_Category": "B"
    },
    {
        "Place": "Bangalore",
        "Monthly_Rent": "110000",
        "Category": "II",
        "Sub_Category": "A"
    },
    {
        "Place": "Hyderabad",
        "Monthly_Rent": "105000",
        "Category": "II",
        "Sub_Category": "A"
    },
    {
        "Place": "Ahmedabad",
        "Monthly_Rent": "92000",
        "Category": "II",
        "Sub_Category": "A"
    },
    {
        "Place": "Chennai",
        "Monthly_Rent": "102000",
        "Category": "II",
        "Sub_Category": "B"
    },
    {
        "Place": "Kolkata",
        "Monthly_Rent": "99000",
        "Category": "II",
        "Sub_Category": "B"
    },
    {
        "Place": "Gurgaon",
        "Monthly_Rent": "114000",
        "Category": "II",
        "Sub_Category": "B"
    },
    {
        "Place": "Faridabad",
        "Monthly_Rent": "90000",
        "Category": "III",
        "Sub_Category": "A"
    },
    {
        "Place": "Surat",
        "Monthly_Rent": "105000",
        "Category": "III",
        "Sub_Category": "A"
    },
    {
        "Place": "Pune",
        "Monthly_Rent": "110000",
        "Category": "III",
        "Sub_Category": "A"
    }
]
```
### Step 3

- Copy the above data and paste it in the app.
- Enter the rest of the fields.

**For example:** 

if you have 6 cities in your data and you want to get all the combinations possible of 3 cities with a certain Maximum Rent.

The Maximum number of combinations you will get 6C3, which is 20. And it will keep decreasing if you decrease the maxRent.

You can also filter the combinations based on the number of categories and Sub_Categories you want in your result.

### Result will look like...

[![Screenshot-455.png](https://i.postimg.cc/5yk4C2Pw/Screenshot-455.png)](https://postimg.cc/YLYBcMB9)


