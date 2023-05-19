const server = require('../src/app');
const session = require('supertest');
const agent = session(server);


describe('Test de RUTAS', () => {

    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const respuesta = await agent.get('/rickandmorty/character/1');
            expect(respuesta.body).toHaveProperty('id');
            expect(respuesta.body).toHaveProperty('name');
            expect(respuesta.body).toHaveProperty('species');
            expect(respuesta.body).toHaveProperty('gender');
            expect(respuesta.body).toHaveProperty('status');
            expect(respuesta.body).toHaveProperty('origin');
            expect(respuesta.body).toHaveProperty('image'); 
        })
        it('Si hay un error responde con status: 500', async () => {
            await agent.get('/rickandmorty/character/999').expect(500);
        })
    })

    describe("GET /rickandmorty/login", () => {
        const access = { access: true };
        it('Debería responder con acceso = true si se proporcionan credenciales válidas', async () => {
            const loginInfo = { email: 'tomaspino.velez@gmail.com', password: 'soyhenry5' };
            const response = await agent.get('/rickandmorty/login').query(loginInfo);
            expect(response.body).toEqual({ access: true });
        });
        it('Debería responder con acceso = false si se proporcionan credenciales inválidas', async () => {
            const loginInfo = { email: 'tomaspino.vemail.com', password: 'soyhe' };
            const response = await agent.get('/rickandmorty/login').query(loginInfo);
            access.access = false;
            expect(response.body).toEqual({ access: false });
        });      
    })

    describe("POST /rickandmorty/fav", () => {
        it("Lo que envíes por body debe ser devuelto en un arreglo", async () => {
            const body = { character: "Rick" };
            const response = await agent.post("/rickandmorty/fav").send(body);
            expect(response.status).toBe(200);
            expect(response.body).toEqual([body]);
        });
        it("Si envías un nuevo elemento por body, este debe ser devuelto en un arreglo que incluye el elemento enviado previamente", async () => {
            const body1 = { character: "Rick" };
            const body2 = { character: "Morty" };
            const response2 = await agent.post("/rickandmorty/fav").send(body2);
            expect(response2.status).toBe(200);
            expect(response2.body).toEqual([body1, body2]);
        });
    })

    describe('DELETE /rickandmorty/fav/:id', () => {
        it("Si el ID no existe, devuelve el arreglo original sin modificar", async () => {
            const response = await agent.delete("/rickandmorty/fav/999");
            expect(response.body.length).toBe(2);
        });
        it("Si el ID existe, elimina correctamente al personaje", async () => {
            const response = await agent.delete(`/rickandmorty/fav/1435`);
            expect(response.body.length).toBe(2);
        });
    })
})
