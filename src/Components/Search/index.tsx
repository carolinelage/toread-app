import React, { useState } from 'react'
import { View } from 'react-native'
import * as AuthSession from 'expo-auth-session';
import { Searchbar } from 'react-native-paper';

interface BookData {
    volumeInfo: {
      title: string;
      categories?: string[];
      publisher?: string;
      authors: string[];
      description: string;
      infoLink: string;
      imageLinks?: {
        thumbnail: string;
      }
      publishedDate: string;
    }
  }


export default function Search() {
    const [searchInput, setSearchInput] = useState('');

    const [booksFound, setBooksFound] = useState<BookData[]>([]);

    async function buscarLivros(){
        try {

            const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchInput}`);

            const books = await res.json();
            console.log(books);
            console.log({searchInput});

        } catch (error) {
            console.log("Errou!");
        }

  return (
    <View>
      <Searchbar
      placeholder="Search"
      onChangeText={buscarLivros}
      value={searchInput}
      />
    </View>
  )
}
}
