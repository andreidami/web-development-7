import React from "react";


const inventors = [
    { first: "Albert", last: "Einstein", year: 1879 },
    { first: "Isaac", last: "Newton", year: 1643 },
    { first: "Galileo", last: "Galilei", year: 1564 },
    { first: "Marie", last: "Curie", year: 1867 },
    { first: "Johannes", last: "Kepler", year: 1571 },
    { first: "Nicolaus", last: "Copernicus", year: 1473 },
    { first: "Max", last: "Plank", year: 1858 },

  ];export const InventorsList = (props) => {
      return (

        <ol>
            {
                inventors.map((inventor, index) => (
                    <li key={`${inventor.firs}-${inventor.last}-${inventor.year}-${index}`}>
                        {inventor.first} {inventor.last}, born in {inventor.year}</li>
                ))
            }
        </ol>
      )
  }

