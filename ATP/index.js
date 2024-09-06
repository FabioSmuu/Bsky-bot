import fs from 'fs'
import path from 'path'

const getModules = async (dir) => {
  const files = fs.readdirSync(dir)
  const modules = {}

  for (const file of files) {
    const fullPath = path.join(dir, file)

    if (fs.statSync(fullPath).isDirectory()) {
      modules[file] = await getModules(fullPath)
    } else if (file.endsWith('.js') && file !== 'index.js') {
      const moduleName = path.basename(file, '.js')
      modules[moduleName] = await import(fullPath)
    }
  }

  return modules
}

const modules = await getModules(path.resolve('ATP'))

export default modules
