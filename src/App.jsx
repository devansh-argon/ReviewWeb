import {
  Button,
  Container,
  useComputedColorScheme,
  Text,
  Image,
  Title,
  AppShell
} from '@mantine/core';
import React, { useState, useEffect } from 'react';
import '@mantine/core/styles.css';
import './App.css'
import { getSuggestions } from './firebase';
import AppHeader from './components/header';// This is incorrect for your current setup:
import { TaskCard } from './components/TaskCard';


function App() {

  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const computedColorScheme = useComputedColorScheme('dark');

  const loadSuggestions = async () => {
    setLoading(true);
    try {
      const data = await getSuggestions();
      setSuggestions(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSuggestions();
  }, []);

  return (
    <>
      <div className='App' >
        <AppShell
          padding="md"
          header={{ height: 80 }}
          footer={{ height: 60 }}>

          <AppShell.Header>
            <AppHeader />
          </AppShell.Header>

          <AppShell.Main>
            <Image
              src={computedColorScheme === 'dark' ? '/main-dark.svg' : '/main-light.svg'}
              alt="Argon IT Services Logo"
              height={250}
              my='20'
              fit="contain"
            />
            <Title>✨ Share Your Experience</Title>
            <Text my='20'>Pick a review below that matches your experience. Click to copy and post it on our Google Review page. Your support means the world!</Text>

            <Container id="reviews-container">
              {loading ? (
                <p>Loading new suggestions...</p>
              ) : (
                suggestions.map((sugitem, index) => (
                  <TaskCard key={index} message={sugitem.message} index={index} />
                ))
              )}
            </Container>

            <Button
              className="refresh-btn"
              onClick={loadSuggestions}
              variant="light"
              color="blue"
              style={{ marginBottom: '1rem', marginTop: '2rem' }}
            >
              🔄 Show Other Suggestions
            </Button>

          </AppShell.Main>

          <AppShell.Footer>
            <Text>
              &copy; All Rights Reserved 2025-{new Date().getFullYear()} Made by&nbsp;&nbsp;
              <span className="devansh-container">
                <a
                  href="https://devenvoy.github.io/Devansh_Portfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="devansh-link"
                >
                  Devansh
                </a>
              </span>
            </Text>
          </AppShell.Footer>

        </AppShell>
      </div>
    </>
  )
}

export default App
