import React, { useEffect, useState } from 'react';
import { View, TextInput } from 'react-native';


const SearchScreen = () => {
    const [input, setInput] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                if (input) {
                    const res = await fetch.get('http://localhost:9000/addemployee/find/${id}');

                    if (res.data) {
                        setData([res.data]); 
                    } else {
                        setData([]);
                    }
                } else {
                    setData([]);
                }
            } catch (error) {
                console.error(error);
                setData([]);
            }
        };

        fetchEmployee();
    }, [input]);

    return (
        <View style={{ padding: 10 }}>
            <TextInput
                placeholder="Search by ID"
                value={input}
                onChangeText={setInput}
                style={{
                    borderColor: 'gray',
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 8,
                    marginBottom: 20,
                }}
            />
            <SearchResult data={data} input={input} />
        </View>
    );
};

export default SearchScreen;
