import * as SQLite from 'expo-sqlite';

let db = null;

export const initDatabase = async () => {
    try {
        db = await SQLite.openDatabaseAsync('notes.db');
        await createTables();
        await insertDefaultSettings();
        console.log('Database initialized successfully');
    } catch (error) {
        console.error('Database initialization error:', error);
        throw error;
    }
};

const createTables = async () => {
    try {
        // Tạo bảng notes
        await db.execAsync(`
            CREATE TABLE IF NOT EXISTS notes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                content TEXT
            );
        `);
        console.log('Notes table created successfully');

        // Tạo bảng settings
        await db.execAsync(`
            CREATE TABLE IF NOT EXISTS settings (
                id INTEGER PRIMARY KEY DEFAULT 1,
                darkMode INTEGER DEFAULT 0,
                fontSize INTEGER DEFAULT 16,
                CHECK (id = 1)
            );
        `);
        console.log('Settings table created successfully');
    } catch (error) {
        console.error('Create tables error:', error);
        throw error;
    }
};

const insertDefaultSettings = async () => {
    try {
        await db.execAsync(
            'INSERT OR IGNORE INTO settings (id, darkMode, fontSize) VALUES (1, 0, 16);'
        );
        console.log('Default settings initialized');
    } catch (error) {
        console.error('Error initializing settings:', error);
        throw error;
    }
};

const ensureDatabase = () => {
    if (!db) {
        throw new Error('Database not initialized. Call initDatabase() first.');
    }
    return db;
};

export const getNotes = async () => {
    try {
        const database = ensureDatabase();
        const result = await database.getAllAsync('SELECT * FROM notes ORDER BY id DESC;');
        return result;
    } catch (error) {
        console.error('Error getting notes:', error);
        throw error;
    }
};

export const addNote = async (title, content) => {
    try {
        const database = ensureDatabase();
        const statement = await database.prepareAsync(
            'INSERT INTO notes (title, content) VALUES (?, ?);'
        );
        try {
            const result = await statement.executeAsync([title, content || '']);
            return result.lastInsertRowId;
        } finally {
            await statement.finalizeAsync();
        }
    } catch (error) {
        console.error('Error adding note:', error);
        throw error;
    }
};

export const updateNote = async (id, title, content) => {
    try {
        const database = ensureDatabase();
        const statement = await database.prepareAsync(
            'UPDATE notes SET title = ?, content = ? WHERE id = ?;'
        );
        try {
            const result = await statement.executeAsync([title, content || '', id]);
            return result.changes;
        } finally {
            await statement.finalizeAsync();
        }
    } catch (error) {
        console.error('Error updating note:', error);
        throw error;
    }
};

export const deleteNote = async (id) => {
    try {
        const database = ensureDatabase();
        const statement = await database.prepareAsync('DELETE FROM notes WHERE id = ?;');
        try {
            const result = await statement.executeAsync([id]);
            return result.changes;
        } finally {
            await statement.finalizeAsync();
        }
    } catch (error) {
        console.error('Error deleting note:', error);
        throw error;
    }
};

export const getSettings = async () => {
    try {
        const database = ensureDatabase();
        const result = await database.getFirstAsync('SELECT * FROM settings WHERE id = 1;');

        if (result) {
            return {
                darkMode: result.darkMode === 1,
                fontSize: result.fontSize,
            };
        } else {
            return { darkMode: false, fontSize: 16 };
        }
    } catch (error) {
        console.error('Error getting settings:', error);
        throw error;
    }
};

export const updateSettings = async (darkMode, fontSize) => {
    try {
        const database = ensureDatabase();
        const statement = await database.prepareAsync(
            'UPDATE settings SET darkMode = ?, fontSize = ? WHERE id = 1;'
        );
        try {
            const result = await statement.executeAsync([darkMode ? 1 : 0, fontSize]);
            return result.changes;
        } finally {
            await statement.finalizeAsync();
        }
    } catch (error) {
        console.error('Error updating settings:', error);
        throw error;
    }
};
