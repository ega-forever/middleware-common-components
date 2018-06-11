module.exports = (interfaceModel, instance)=>{

  for(let prop of Object.keys(interfaceModel.props)){
    if(typeof instance[prop] !== interfaceModel.props[prop])
      throw new Error(`interface ${prop} is not implemented for ${interfaceModel.name}`)

  }

  return instance;

};