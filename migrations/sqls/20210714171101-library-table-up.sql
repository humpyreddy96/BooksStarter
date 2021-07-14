CREATE TABLE LIBRARY (id SERIAL PRIMARY KEY,
                            title VARCHAR(100),
                            author VARCHAR(100),
                            total_pages integer,
                            type VARCHAR(50),
                            summary text);